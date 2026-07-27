import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-pvpe-server');
}

export default function Rubinot854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-pvpe-server" />;
}
