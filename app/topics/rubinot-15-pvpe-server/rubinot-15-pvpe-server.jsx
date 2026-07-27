import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-pvpe-server');
}

export default function Rubinot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-pvpe-server" />;
}
