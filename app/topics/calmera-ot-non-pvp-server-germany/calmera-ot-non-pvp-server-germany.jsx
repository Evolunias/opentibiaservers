import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-germany');
}

export default function CalmeraOtNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-germany" />;
}
