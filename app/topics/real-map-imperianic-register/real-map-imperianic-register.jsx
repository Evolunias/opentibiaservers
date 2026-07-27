import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-register');
}

export default function RealMapImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-register" />;
}
