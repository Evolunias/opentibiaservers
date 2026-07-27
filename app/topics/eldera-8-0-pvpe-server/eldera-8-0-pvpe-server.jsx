import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-pvpe-server');
}

export default function Eldera80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-pvpe-server" />;
}
