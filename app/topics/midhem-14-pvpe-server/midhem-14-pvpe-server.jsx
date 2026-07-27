import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-pvpe-server');
}

export default function Midhem14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-pvpe-server" />;
}
