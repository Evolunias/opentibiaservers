import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-login');
}

export default function RealMapTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-login" />;
}
