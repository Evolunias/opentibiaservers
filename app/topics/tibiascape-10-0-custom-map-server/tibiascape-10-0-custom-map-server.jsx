import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-custom-map-server');
}

export default function Tibiascape100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-custom-map-server" />;
}
