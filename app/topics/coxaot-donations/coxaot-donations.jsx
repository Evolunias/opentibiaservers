import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-donations');
}

export default function CoxaotDonationsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-donations" />;
}
