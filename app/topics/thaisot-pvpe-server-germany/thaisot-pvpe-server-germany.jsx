import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-germany');
}

export default function ThaisotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-germany" />;
}
