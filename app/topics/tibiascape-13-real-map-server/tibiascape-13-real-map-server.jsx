import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-real-map-server');
}

export default function Tibiascape13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-real-map-server" />;
}
