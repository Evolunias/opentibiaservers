import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-mexico');
}

export default function ClassickDrakoriaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-mexico" />;
}
