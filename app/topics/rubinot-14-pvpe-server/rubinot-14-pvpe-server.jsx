import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-pvpe-server');
}

export default function Rubinot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-pvpe-server" />;
}
