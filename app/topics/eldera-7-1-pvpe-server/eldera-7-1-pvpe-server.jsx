import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-pvpe-server');
}

export default function Eldera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-pvpe-server" />;
}
