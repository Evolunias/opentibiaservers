import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-france');
}

export default function ClassicusRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-france" />;
}
