import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-register');
}

export default function RealMapThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-register" />;
}
