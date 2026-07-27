import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-pvpe-server');
}

export default function Tibiantis80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-pvpe-server" />;
}
