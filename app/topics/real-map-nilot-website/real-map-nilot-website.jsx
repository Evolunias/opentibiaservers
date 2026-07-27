import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-website');
}

export default function RealMapNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-website" />;
}
