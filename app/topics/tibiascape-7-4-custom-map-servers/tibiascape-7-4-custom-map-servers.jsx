import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-custom-map-servers');
}

export default function Tibiascape74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-custom-map-servers" />;
}
