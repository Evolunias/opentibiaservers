import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-donations');
}

export default function ShadowcoresDonationsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-donations" />;
}
