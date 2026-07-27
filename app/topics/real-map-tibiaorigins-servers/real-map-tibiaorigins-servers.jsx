import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-servers');
}

export default function RealMapTibiaoriginsServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-servers" />;
}
