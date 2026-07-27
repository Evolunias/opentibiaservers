import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-custom-map-server');
}

export default function Tibiascape76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-custom-map-server" />;
}
