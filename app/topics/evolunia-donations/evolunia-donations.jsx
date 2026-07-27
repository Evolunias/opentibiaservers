import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-donations');
}

export default function EvoluniaDonationsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-donations" />;
}
