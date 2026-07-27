import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-create-account');
}

export default function RealMapTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-create-account" />;
}
