import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-donations');
}

export default function ElderaDonationsKeywordPage() {
  return <StaticKeywordPage slug="eldera-donations" />;
}
