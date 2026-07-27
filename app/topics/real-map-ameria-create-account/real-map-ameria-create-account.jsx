import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-create-account');
}

export default function RealMapAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-create-account" />;
}
