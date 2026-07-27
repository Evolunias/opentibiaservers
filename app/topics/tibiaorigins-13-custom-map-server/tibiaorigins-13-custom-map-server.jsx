import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-custom-map-server');
}

export default function Tibiaorigins13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-custom-map-server" />;
}
