import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-client');
}

export default function RealMapNilotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-client" />;
}
