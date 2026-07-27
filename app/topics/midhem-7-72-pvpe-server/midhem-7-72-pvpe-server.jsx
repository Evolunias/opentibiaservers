import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-pvpe-server');
}

export default function Midhem772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-pvpe-server" />;
}
