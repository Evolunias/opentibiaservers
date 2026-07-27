import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-donations');
}

export default function OriginaltibiaDonationsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-donations" />;
}
