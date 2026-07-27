import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-donations');
}

export default function MarolaotDonationsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-donations" />;
}
