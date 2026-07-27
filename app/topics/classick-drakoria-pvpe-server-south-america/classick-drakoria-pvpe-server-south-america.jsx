import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-south-america');
}

export default function ClassickDrakoriaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-south-america" />;
}
