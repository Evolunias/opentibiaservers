import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-pvpe-server');
}

export default function Eldera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-pvpe-server" />;
}
