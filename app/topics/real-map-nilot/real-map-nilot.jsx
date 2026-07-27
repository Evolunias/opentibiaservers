import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot');
}

export default function RealMapNilotKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot" />;
}
