import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-donations');
}

export default function VenoreotDonationsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-donations" />;
}
