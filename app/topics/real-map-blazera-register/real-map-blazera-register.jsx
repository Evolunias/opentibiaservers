import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-register');
}

export default function RealMapBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-register" />;
}
