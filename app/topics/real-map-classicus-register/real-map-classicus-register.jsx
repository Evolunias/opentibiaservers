import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-register');
}

export default function RealMapClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-register" />;
}
