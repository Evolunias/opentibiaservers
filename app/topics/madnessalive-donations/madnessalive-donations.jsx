import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-donations');
}

export default function MadnessaliveDonationsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-donations" />;
}
