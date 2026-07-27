import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-pvpe-server');
}

export default function Tibiantis1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-pvpe-server" />;
}
