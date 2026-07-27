import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-france');
}

export default function ClassickDrakoriaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-france" />;
}
