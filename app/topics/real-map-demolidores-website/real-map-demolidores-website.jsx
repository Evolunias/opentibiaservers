import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-website');
}

export default function RealMapDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-website" />;
}
