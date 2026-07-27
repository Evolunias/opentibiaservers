import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-register');
}

export default function RealMapSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-register" />;
}
