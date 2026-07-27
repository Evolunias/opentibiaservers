import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-create-account');
}

export default function RealMapYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-create-account" />;
}
