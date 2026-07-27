import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-create-account');
}

export default function RealMapTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-create-account" />;
}
