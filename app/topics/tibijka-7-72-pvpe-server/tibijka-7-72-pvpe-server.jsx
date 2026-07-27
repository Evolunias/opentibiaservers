import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-pvpe-server');
}

export default function Tibijka772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-pvpe-server" />;
}
