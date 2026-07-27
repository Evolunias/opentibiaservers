import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-custom-map-servers');
}

export default function Tibiascape13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-custom-map-servers" />;
}
