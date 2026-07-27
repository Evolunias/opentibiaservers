import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-pvpe-server');
}

export default function Tibiantis74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-pvpe-server" />;
}
