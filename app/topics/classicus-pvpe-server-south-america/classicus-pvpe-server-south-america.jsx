import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-south-america');
}

export default function ClassicusPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-south-america" />;
}
