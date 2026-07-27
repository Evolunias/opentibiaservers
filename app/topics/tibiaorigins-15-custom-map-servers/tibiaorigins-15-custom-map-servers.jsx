import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-custom-map-servers');
}

export default function Tibiaorigins15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-custom-map-servers" />;
}
