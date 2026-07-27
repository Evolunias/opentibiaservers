import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-donations');
}

export default function AureraGlobalDonationsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-donations" />;
}
