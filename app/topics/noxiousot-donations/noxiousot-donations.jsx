import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-donations');
}

export default function NoxiousotDonationsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-donations" />;
}
