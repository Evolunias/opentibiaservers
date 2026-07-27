import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-custom-map-servers');
}

export default function Tibiascape100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-custom-map-servers" />;
}
