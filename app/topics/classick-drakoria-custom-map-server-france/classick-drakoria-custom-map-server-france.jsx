import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-france');
}

export default function ClassickDrakoriaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-france" />;
}
