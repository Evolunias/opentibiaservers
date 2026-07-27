import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-pvpe-server');
}

export default function Tibiantis86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-pvpe-server" />;
}
