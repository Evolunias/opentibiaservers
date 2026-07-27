import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-server');
}

export default function RealMapTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-server" />;
}
