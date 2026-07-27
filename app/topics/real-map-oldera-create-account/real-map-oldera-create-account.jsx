import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-create-account');
}

export default function RealMapOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-create-account" />;
}
