import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-poland');
}

export default function CalmeraOtNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-poland" />;
}
