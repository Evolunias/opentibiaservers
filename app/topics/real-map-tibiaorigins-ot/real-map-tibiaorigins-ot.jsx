import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-ot');
}

export default function RealMapTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-ot" />;
}
