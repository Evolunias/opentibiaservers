import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-login');
}

export default function RealMapThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-login" />;
}
