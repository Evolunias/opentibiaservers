import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-private-server');
}

export default function RealMapTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-private-server" />;
}
