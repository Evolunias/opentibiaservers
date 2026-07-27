import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-pvpe-server');
}

export default function Midhem15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-pvpe-server" />;
}
