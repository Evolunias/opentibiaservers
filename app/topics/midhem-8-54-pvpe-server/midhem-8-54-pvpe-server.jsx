import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-pvpe-server');
}

export default function Midhem854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-pvpe-server" />;
}
