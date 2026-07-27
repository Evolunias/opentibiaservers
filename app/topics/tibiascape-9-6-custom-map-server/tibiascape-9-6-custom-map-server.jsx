import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-custom-map-server');
}

export default function Tibiascape96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-custom-map-server" />;
}
