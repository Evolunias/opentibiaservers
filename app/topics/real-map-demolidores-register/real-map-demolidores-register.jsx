import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-register');
}

export default function RealMapDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-register" />;
}
