import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-real-map-server');
}

export default function Tibiascape84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-real-map-server" />;
}
