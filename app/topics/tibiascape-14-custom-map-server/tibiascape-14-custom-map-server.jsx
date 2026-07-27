import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-custom-map-server');
}

export default function Tibiascape14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-custom-map-server" />;
}
