import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-custom-map-servers');
}

export default function Tibiascape14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-custom-map-servers" />;
}
