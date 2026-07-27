import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-pvpe-server');
}

export default function Tibiantis12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-pvpe-server" />;
}
