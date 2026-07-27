import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-donations');
}

export default function EmpirebrDonationsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-donations" />;
}
