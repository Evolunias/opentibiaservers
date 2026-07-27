import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-donations');
}

export default function RealeraDonationsKeywordPage() {
  return <StaticKeywordPage slug="realera-donations" />;
}
