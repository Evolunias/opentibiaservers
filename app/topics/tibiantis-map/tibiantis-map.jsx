import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-map');
}

export default function TibiantisMapKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-map" />;
}
