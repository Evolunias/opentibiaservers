import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-pvpe-server');
}

export default function Rubinot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-pvpe-server" />;
}
