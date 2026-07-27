import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-donations');
}

export default function CalmeraOtDonationsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-donations" />;
}
