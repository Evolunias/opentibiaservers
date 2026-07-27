import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-website');
}

export default function RealMapTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-website" />;
}
