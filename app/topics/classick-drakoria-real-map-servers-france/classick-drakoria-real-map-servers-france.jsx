import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-servers-france');
}

export default function ClassickDrakoriaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-servers-france" />;
}
