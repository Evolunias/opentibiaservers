import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-pvpe-server');
}

export default function Eldera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-pvpe-server" />;
}
