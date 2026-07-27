import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-pvpe-server');
}

export default function Eldera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-pvpe-server" />;
}
