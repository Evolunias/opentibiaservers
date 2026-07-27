import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-custom-map-servers');
}

export default function Tibiaorigins71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-custom-map-servers" />;
}
