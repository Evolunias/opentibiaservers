import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-donations');
}

export default function InfernalOtDonationsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-donations" />;
}
