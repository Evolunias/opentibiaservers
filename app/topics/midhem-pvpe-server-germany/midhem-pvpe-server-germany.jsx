import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-germany');
}

export default function MidhemPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-germany" />;
}
