import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-custom-map-servers');
}

export default function Tibiaorigins84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-custom-map-servers" />;
}
