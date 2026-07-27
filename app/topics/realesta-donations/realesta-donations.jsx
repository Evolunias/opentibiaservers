import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-donations');
}

export default function RealestaDonationsKeywordPage() {
  return <StaticKeywordPage slug="realesta-donations" />;
}
