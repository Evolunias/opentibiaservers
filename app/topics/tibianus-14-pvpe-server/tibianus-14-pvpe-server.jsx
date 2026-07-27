import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-pvpe-server');
}

export default function Tibianus14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-pvpe-server" />;
}
