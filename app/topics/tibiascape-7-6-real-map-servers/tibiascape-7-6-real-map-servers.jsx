import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-real-map-servers');
}

export default function Tibiascape76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-real-map-servers" />;
}
