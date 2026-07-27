import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-donations');
}

export default function MediviaDonationsKeywordPage() {
  return <StaticKeywordPage slug="medivia-donations" />;
}
