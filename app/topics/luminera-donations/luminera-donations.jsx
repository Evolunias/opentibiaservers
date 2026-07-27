import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-donations');
}

export default function LumineraDonationsKeywordPage() {
  return <StaticKeywordPage slug="luminera-donations" />;
}
