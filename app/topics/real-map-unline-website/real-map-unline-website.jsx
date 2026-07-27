import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-website');
}

export default function RealMapUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-website" />;
}
