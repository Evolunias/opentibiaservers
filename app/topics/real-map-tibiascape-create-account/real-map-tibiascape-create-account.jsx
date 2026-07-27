import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-create-account');
}

export default function RealMapTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-create-account" />;
}
