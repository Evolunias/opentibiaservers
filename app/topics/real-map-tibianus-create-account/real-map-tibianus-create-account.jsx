import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-create-account');
}

export default function RealMapTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-create-account" />;
}
