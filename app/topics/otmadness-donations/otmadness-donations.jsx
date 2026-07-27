import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-donations');
}

export default function OtmadnessDonationsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-donations" />;
}
