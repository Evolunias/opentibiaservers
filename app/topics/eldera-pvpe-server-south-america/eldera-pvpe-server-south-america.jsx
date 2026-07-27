import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-south-america');
}

export default function ElderaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-south-america" />;
}
