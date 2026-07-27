import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-real-map-server');
}

export default function Tibiascape12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-real-map-server" />;
}
