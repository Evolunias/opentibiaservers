import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-pvpe-server');
}

export default function Eldera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-pvpe-server" />;
}
