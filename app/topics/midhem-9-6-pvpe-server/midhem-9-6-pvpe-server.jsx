import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-pvpe-server');
}

export default function Midhem96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-pvpe-server" />;
}
