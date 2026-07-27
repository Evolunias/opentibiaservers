import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-custom-map-servers');
}

export default function Tibiascape11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-custom-map-servers" />;
}
