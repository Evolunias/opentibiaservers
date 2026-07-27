import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-germany');
}

export default function ElderaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-germany" />;
}
