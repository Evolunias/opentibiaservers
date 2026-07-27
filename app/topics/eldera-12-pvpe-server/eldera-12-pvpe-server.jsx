import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-pvpe-server');
}

export default function Eldera12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-pvpe-server" />;
}
