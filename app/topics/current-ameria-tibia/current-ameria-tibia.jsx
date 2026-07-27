import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-tibia');
}

export default function CurrentAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-tibia" />;
}
