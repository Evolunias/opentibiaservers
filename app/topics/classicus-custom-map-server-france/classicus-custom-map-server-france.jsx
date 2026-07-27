import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-france');
}

export default function ClassicusCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-france" />;
}
