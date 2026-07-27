import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-tibia');
}

export default function CurrentRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-tibia" />;
}
