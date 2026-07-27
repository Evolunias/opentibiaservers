import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-server');
}

export default function RealMapNilotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-server" />;
}
