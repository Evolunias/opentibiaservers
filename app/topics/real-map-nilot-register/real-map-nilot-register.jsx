import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-register');
}

export default function RealMapNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-register" />;
}
