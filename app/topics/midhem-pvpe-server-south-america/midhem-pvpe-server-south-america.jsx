import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-south-america');
}

export default function MidhemPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-south-america" />;
}
