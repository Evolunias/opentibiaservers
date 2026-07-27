import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-custom-map-server');
}

export default function Tibiaorigins100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-custom-map-server" />;
}
