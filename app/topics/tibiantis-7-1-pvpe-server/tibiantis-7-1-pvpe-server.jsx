import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-pvpe-server');
}

export default function Tibiantis71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-pvpe-server" />;
}
