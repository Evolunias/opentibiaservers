import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-pvpe-server');
}

export default function Tibijka12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-pvpe-server" />;
}
