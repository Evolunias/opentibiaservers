import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-pvpe-server');
}

export default function Eldera14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-pvpe-server" />;
}
