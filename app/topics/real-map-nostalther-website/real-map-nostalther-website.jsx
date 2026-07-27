import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-website');
}

export default function RealMapNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-website" />;
}
