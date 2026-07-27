import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-create-account');
}

export default function RealMapMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-create-account" />;
}
