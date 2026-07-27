import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-donations');
}

export default function BaiakIlusionDonationsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-donations" />;
}
