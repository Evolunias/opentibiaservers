import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-pvpe-server');
}

export default function Rubinot772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-pvpe-server" />;
}
