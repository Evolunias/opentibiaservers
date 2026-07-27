import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-custom-map-servers');
}

export default function Tibiascape81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-custom-map-servers" />;
}
