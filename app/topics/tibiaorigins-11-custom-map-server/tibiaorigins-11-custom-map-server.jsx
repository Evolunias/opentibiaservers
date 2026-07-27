import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-custom-map-server');
}

export default function Tibiaorigins11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-custom-map-server" />;
}
