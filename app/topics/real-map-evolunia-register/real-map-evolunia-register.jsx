import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-register');
}

export default function RealMapEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-register" />;
}
