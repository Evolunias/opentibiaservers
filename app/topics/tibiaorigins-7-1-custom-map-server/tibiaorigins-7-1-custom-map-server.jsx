import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-custom-map-server');
}

export default function Tibiaorigins71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-custom-map-server" />;
}
