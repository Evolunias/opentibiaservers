import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-real-map-servers');
}

export default function Tibiascape80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-real-map-servers" />;
}
