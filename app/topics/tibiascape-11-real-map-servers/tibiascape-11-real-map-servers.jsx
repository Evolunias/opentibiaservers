import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-real-map-servers');
}

export default function Tibiascape11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-real-map-servers" />;
}
