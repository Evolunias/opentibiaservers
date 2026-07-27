import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-uk');
}

export default function CalmeraOtNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-uk" />;
}
