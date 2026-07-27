import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-mexico');
}

export default function ClassickDrakoriaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-mexico" />;
}
