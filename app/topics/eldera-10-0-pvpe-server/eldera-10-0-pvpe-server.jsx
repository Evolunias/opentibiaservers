import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-pvpe-server');
}

export default function Eldera100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-pvpe-server" />;
}
