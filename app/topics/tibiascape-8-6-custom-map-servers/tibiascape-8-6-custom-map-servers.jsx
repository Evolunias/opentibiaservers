import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-custom-map-servers');
}

export default function Tibiascape86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-custom-map-servers" />;
}
