import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-donations');
}

export default function ImperianicDonationsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-donations" />;
}
