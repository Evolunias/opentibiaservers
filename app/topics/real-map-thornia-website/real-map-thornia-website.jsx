import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-website');
}

export default function RealMapThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-website" />;
}
