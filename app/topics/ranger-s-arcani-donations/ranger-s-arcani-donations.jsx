import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-donations');
}

export default function RangerSArcaniDonationsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-donations" />;
}
