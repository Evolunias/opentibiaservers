import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-europe');
}

export default function ThaisotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-europe" />;
}
