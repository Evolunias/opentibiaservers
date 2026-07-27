import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-guide');
}

export default function RealMapTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-guide" />;
}
