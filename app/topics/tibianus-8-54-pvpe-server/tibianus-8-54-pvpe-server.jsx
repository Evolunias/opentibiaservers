import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-pvpe-server');
}

export default function Tibianus854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-pvpe-server" />;
}
