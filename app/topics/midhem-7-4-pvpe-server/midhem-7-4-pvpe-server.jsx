import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-pvpe-server');
}

export default function Midhem74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-pvpe-server" />;
}
