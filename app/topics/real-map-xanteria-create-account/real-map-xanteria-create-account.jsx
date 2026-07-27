import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-create-account');
}

export default function RealMapXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-create-account" />;
}
