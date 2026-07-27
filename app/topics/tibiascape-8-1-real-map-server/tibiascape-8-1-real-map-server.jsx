import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-real-map-server');
}

export default function Tibiascape81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-real-map-server" />;
}
