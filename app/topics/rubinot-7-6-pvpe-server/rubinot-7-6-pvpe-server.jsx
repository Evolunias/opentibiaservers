import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-pvpe-server');
}

export default function Rubinot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-pvpe-server" />;
}
