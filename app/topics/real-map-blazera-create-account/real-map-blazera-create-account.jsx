import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-create-account');
}

export default function RealMapBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-create-account" />;
}
