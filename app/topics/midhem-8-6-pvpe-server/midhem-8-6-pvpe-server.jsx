import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-pvpe-server');
}

export default function Midhem86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-pvpe-server" />;
}
