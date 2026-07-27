import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-pvpe-server');
}

export default function Midhem11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-pvpe-server" />;
}
