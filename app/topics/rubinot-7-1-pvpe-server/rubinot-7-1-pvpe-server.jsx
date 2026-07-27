import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-pvpe-server');
}

export default function Rubinot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-pvpe-server" />;
}
