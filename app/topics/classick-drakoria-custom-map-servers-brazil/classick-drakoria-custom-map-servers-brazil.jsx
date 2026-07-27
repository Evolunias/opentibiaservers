import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-brazil');
}

export default function ClassickDrakoriaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-brazil" />;
}
