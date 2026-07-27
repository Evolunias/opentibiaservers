import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-pvpe-server');
}

export default function Rubinot86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-pvpe-server" />;
}
