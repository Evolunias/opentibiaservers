import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-website');
}

export default function RealMapAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-website" />;
}
