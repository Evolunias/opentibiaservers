import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-real-map-servers');
}

export default function Tibiascape12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-real-map-servers" />;
}
