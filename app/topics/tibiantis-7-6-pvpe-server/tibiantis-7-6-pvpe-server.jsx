import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-pvpe-server');
}

export default function Tibiantis76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-pvpe-server" />;
}
