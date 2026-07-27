import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-pvpe-server');
}

export default function Rubinot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-pvpe-server" />;
}
