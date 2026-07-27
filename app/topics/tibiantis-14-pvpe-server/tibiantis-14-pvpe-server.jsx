import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-pvpe-server');
}

export default function Tibiantis14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-pvpe-server" />;
}
