import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-website');
}

export default function RealMapYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-website" />;
}
