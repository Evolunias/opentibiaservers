import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-pvpe-server');
}

export default function Tibianus80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-pvpe-server" />;
}
