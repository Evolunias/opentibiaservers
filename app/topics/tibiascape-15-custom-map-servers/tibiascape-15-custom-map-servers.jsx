import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-custom-map-servers');
}

export default function Tibiascape15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-custom-map-servers" />;
}
