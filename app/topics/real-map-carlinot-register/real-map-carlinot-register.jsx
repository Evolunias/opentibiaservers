import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-register');
}

export default function RealMapCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-register" />;
}
