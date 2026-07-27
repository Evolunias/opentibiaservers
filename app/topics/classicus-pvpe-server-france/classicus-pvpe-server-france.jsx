import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-france');
}

export default function ClassicusPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-france" />;
}
