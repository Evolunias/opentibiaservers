import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-pvpe-server');
}

export default function Tibianus15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-pvpe-server" />;
}
