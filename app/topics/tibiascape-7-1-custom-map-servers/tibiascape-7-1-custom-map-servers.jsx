import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-custom-map-servers');
}

export default function Tibiascape71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-custom-map-servers" />;
}
