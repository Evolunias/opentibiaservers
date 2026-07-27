import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-poland');
}

export default function ThaisotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-poland" />;
}
