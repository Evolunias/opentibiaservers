import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-pvpe-server');
}

export default function Eldera1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-pvpe-server" />;
}
