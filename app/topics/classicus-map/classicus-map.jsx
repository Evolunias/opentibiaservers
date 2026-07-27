import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-map');
}

export default function ClassicusMapKeywordPage() {
  return <StaticKeywordPage slug="classicus-map" />;
}
