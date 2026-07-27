import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-custom-map-servers');
}

export default function Tibiaorigins80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-custom-map-servers" />;
}
