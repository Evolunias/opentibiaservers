import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-pvpe-server');
}

export default function Rubinot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-pvpe-server" />;
}
