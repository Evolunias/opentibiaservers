import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-custom-map-servers');
}

export default function Tibiaorigins12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-custom-map-servers" />;
}
