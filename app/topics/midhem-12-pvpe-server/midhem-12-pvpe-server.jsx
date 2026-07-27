import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-pvpe-server');
}

export default function Midhem12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-pvpe-server" />;
}
