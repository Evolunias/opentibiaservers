import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-real-map-server');
}

export default function Tibiascape96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-real-map-server" />;
}
