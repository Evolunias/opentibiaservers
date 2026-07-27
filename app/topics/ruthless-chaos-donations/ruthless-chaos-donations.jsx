import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-donations');
}

export default function RuthlessChaosDonationsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-donations" />;
}
