import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-donations');
}

export default function BlazeraDonationsKeywordPage() {
  return <StaticKeywordPage slug="blazera-donations" />;
}
