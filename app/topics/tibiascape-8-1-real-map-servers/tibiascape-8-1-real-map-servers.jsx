import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-real-map-servers');
}

export default function Tibiascape81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-real-map-servers" />;
}
