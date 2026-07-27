import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-pvpe-server');
}

export default function Midhem76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-pvpe-server" />;
}
