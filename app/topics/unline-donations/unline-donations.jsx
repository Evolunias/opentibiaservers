import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-donations');
}

export default function UnlineDonationsKeywordPage() {
  return <StaticKeywordPage slug="unline-donations" />;
}
