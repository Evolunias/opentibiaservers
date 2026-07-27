import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-donations');
}

export default function TibiaraDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-donations" />;
}
