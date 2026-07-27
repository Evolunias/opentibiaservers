import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-login');
}

export default function RealMapNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-login" />;
}
