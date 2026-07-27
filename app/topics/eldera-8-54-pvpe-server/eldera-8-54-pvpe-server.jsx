import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-pvpe-server');
}

export default function Eldera854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-pvpe-server" />;
}
