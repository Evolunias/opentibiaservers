import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-pvpe-server');
}

export default function Rubinot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-pvpe-server" />;
}
