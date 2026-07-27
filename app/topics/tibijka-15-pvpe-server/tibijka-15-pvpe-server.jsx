import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-pvpe-server');
}

export default function Tibijka15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-pvpe-server" />;
}
