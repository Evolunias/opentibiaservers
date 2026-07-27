import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-custom-map-servers');
}

export default function Tibiascape96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-custom-map-servers" />;
}
