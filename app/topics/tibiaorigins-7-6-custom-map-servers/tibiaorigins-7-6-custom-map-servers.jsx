import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-custom-map-servers');
}

export default function Tibiaorigins76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-custom-map-servers" />;
}
