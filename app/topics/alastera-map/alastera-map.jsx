import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-map');
}

export default function AlasteraMapKeywordPage() {
  return <StaticKeywordPage slug="alastera-map" />;
}
