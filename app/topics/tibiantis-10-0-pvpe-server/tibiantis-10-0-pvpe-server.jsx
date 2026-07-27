import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-pvpe-server');
}

export default function Tibiantis100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-pvpe-server" />;
}
