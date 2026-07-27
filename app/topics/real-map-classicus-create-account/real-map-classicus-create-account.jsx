import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-create-account');
}

export default function RealMapClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-create-account" />;
}
