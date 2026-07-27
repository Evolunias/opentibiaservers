import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-pvpe-server');
}

export default function Tibiantis96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-pvpe-server" />;
}
