import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-real-map-server');
}

export default function Tibiascape74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-real-map-server" />;
}
