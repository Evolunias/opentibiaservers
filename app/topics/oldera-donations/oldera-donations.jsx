import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-donations');
}

export default function OlderaDonationsKeywordPage() {
  return <StaticKeywordPage slug="oldera-donations" />;
}
