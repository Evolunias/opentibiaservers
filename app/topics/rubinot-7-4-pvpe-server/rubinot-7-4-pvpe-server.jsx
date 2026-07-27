import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-pvpe-server');
}

export default function Rubinot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-pvpe-server" />;
}
