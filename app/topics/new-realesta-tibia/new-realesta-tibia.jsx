import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-tibia');
}

export default function NewRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-tibia" />;
}
