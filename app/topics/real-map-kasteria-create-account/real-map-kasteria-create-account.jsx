import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-create-account');
}

export default function RealMapKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-create-account" />;
}
