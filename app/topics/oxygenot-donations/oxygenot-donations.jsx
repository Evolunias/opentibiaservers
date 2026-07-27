import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-donations');
}

export default function OxygenotDonationsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-donations" />;
}
