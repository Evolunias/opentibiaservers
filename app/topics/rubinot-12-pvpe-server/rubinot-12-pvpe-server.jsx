import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-pvpe-server');
}

export default function Rubinot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-pvpe-server" />;
}
