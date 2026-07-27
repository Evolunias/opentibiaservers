import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-real-map-server');
}

export default function Tibiascape100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-real-map-server" />;
}
