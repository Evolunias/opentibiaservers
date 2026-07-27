import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-servers');
}

export default function RealMapNilotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-servers" />;
}
