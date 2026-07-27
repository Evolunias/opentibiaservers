import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-create-account');
}

export default function RealMapAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-create-account" />;
}
