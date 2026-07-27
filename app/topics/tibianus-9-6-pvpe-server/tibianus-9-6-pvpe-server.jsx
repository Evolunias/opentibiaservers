import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-pvpe-server');
}

export default function Tibianus96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-pvpe-server" />;
}
