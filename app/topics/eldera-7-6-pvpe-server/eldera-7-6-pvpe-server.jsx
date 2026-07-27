import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-pvpe-server');
}

export default function Eldera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-pvpe-server" />;
}
