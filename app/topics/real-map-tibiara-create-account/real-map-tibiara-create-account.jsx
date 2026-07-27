import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-create-account');
}

export default function RealMapTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-create-account" />;
}
