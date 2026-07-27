import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-real-map-servers');
}

export default function Tibiascape13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-real-map-servers" />;
}
