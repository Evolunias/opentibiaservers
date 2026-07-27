import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins');
}

export default function RealMapTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins" />;
}
