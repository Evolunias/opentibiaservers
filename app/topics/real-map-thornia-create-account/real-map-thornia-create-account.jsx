import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-create-account');
}

export default function RealMapThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-create-account" />;
}
