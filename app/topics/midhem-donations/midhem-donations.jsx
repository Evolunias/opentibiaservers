import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-donations');
}

export default function MidhemDonationsKeywordPage() {
  return <StaticKeywordPage slug="midhem-donations" />;
}
