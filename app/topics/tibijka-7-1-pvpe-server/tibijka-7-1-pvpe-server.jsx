import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-pvpe-server');
}

export default function Tibijka71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-pvpe-server" />;
}
