import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-website');
}

export default function RealMapXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-website" />;
}
