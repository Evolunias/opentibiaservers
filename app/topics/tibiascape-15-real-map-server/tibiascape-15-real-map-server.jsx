import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-real-map-server');
}

export default function Tibiascape15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-real-map-server" />;
}
