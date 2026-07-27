import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-pvpe-server');
}

export default function Tibianus76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-pvpe-server" />;
}
