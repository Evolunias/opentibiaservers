import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-custom-map-server');
}

export default function Tibiascape11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-custom-map-server" />;
}
