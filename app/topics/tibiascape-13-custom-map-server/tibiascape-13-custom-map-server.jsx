import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-custom-map-server');
}

export default function Tibiascape13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-custom-map-server" />;
}
