import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-donations');
}

export default function KasteriaDonationsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-donations" />;
}
