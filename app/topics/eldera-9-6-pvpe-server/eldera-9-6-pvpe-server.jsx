import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-pvpe-server');
}

export default function Eldera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-pvpe-server" />;
}
