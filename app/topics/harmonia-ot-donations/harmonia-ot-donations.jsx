import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-donations');
}

export default function HarmoniaOtDonationsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-donations" />;
}
