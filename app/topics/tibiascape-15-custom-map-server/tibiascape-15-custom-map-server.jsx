import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-custom-map-server');
}

export default function Tibiascape15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-custom-map-server" />;
}
