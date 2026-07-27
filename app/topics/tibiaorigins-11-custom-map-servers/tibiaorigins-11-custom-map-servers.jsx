import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-custom-map-servers');
}

export default function Tibiaorigins11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-custom-map-servers" />;
}
