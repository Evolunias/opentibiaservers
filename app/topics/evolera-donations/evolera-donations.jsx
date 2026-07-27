import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-donations');
}

export default function EvoleraDonationsKeywordPage() {
  return <StaticKeywordPage slug="evolera-donations" />;
}
