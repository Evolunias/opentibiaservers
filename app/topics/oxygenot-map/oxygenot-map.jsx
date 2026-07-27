import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-map');
}

export default function OxygenotMapKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-map" />;
}
