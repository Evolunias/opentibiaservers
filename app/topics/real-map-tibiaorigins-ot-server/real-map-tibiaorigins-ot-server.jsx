import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-ot-server');
}

export default function RealMapTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-ot-server" />;
}
