import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-real-map-servers');
}

export default function Tibiascape1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-real-map-servers" />;
}
