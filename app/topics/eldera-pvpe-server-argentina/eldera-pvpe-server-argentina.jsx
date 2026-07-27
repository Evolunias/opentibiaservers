import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-argentina');
}

export default function ElderaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-argentina" />;
}
