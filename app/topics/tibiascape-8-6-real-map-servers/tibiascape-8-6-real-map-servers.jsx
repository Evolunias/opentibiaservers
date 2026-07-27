import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-real-map-servers');
}

export default function Tibiascape86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-real-map-servers" />;
}
