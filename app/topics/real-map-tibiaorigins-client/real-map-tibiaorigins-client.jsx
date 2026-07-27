import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-client');
}

export default function RealMapTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-client" />;
}
