import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-custom-map-servers');
}

export default function Tibiaorigins96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-custom-map-servers" />;
}
