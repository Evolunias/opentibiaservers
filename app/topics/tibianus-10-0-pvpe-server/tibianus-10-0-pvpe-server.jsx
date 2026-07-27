import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-pvpe-server');
}

export default function Tibianus100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-pvpe-server" />;
}
