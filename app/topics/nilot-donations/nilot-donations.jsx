import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-donations');
}

export default function NilotDonationsKeywordPage() {
  return <StaticKeywordPage slug="nilot-donations" />;
}
