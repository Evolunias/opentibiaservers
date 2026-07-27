import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-login');
}

export default function RealMapXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-login" />;
}
