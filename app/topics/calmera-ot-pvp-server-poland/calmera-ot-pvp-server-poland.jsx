import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-poland');
}

export default function CalmeraOtPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-poland" />;
}
