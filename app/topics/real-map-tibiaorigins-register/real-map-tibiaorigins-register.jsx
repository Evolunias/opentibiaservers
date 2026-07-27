import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-register');
}

export default function RealMapTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-register" />;
}
