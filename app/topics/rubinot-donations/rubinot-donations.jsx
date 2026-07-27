import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-donations');
}

export default function RubinotDonationsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-donations" />;
}
