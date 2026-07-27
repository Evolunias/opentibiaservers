import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-custom-map-server');
}

export default function Tibiascape84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-custom-map-server" />;
}
