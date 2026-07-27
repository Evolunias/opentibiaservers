import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-create-account');
}

export default function RealMapCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-create-account" />;
}
