import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-donations');
}

export default function CarlinotDonationsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-donations" />;
}
