import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-create-account');
}

export default function RealMapEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-create-account" />;
}
