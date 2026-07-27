import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-create-account');
}

export default function RealMapUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-create-account" />;
}
