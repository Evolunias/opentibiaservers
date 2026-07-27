import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-usa');
}

export default function ElderaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-usa" />;
}
