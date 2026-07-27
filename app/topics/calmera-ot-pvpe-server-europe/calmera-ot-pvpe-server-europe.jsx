import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-europe');
}

export default function CalmeraOtPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-europe" />;
}
