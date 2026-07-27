import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-pvpe-server');
}

export default function Tibianus71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-pvpe-server" />;
}
