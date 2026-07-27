import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-real-map-servers');
}

export default function Tibiascape74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-real-map-servers" />;
}
