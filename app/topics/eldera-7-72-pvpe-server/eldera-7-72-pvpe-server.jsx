import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-pvpe-server');
}

export default function Eldera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-pvpe-server" />;
}
