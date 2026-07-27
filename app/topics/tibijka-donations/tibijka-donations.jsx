import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-donations');
}

export default function TibijkaDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-donations" />;
}
