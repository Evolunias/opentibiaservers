import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-custom-map-server');
}

export default function Tibiascape854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-custom-map-server" />;
}
