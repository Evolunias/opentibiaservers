import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-custom-map-server');
}

export default function Tibiascape12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-custom-map-server" />;
}
