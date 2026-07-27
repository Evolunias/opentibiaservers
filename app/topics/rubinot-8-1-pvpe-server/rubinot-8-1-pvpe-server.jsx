import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-pvpe-server');
}

export default function Rubinot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-pvpe-server" />;
}
