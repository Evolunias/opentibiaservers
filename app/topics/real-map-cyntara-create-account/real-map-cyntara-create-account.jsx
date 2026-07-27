import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-create-account');
}

export default function RealMapCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-create-account" />;
}
