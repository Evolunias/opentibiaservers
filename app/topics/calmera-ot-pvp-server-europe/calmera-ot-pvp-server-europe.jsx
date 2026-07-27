import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-europe');
}

export default function CalmeraOtPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-europe" />;
}
