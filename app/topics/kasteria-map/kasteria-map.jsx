import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-map');
}

export default function KasteriaMapKeywordPage() {
  return <StaticKeywordPage slug="kasteria-map" />;
}
