import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-register');
}

export default function RealMapTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-register" />;
}
