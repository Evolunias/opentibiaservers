import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-4-custom-map-server');
}

export default function Tibiaorigins74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-4-custom-map-server" />;
}
