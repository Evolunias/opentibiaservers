import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-custom-map-server');
}

export default function Tibiascape1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-custom-map-server" />;
}
