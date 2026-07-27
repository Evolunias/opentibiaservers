import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-pvpe-server');
}

export default function Tibianus86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-pvpe-server" />;
}
