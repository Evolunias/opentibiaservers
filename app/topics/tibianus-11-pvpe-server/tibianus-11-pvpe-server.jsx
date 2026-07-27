import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-pvpe-server');
}

export default function Tibianus11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-pvpe-server" />;
}
