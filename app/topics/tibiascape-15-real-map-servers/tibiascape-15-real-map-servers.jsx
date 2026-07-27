import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-real-map-servers');
}

export default function Tibiascape15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-real-map-servers" />;
}
