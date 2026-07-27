import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-login');
}

export default function RealMapEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-login" />;
}
