import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-real-map-server');
}

export default function Tibiascape11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-real-map-server" />;
}
