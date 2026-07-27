import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-europe');
}

export default function CalmeraOtNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-europe" />;
}
