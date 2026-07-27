import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-donations');
}

export default function MistOfDeathDonationsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-donations" />;
}
