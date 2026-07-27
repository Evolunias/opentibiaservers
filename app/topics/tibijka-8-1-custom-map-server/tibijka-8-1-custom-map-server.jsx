import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-custom-map-server');
}

export default function Tibijka81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-custom-map-server" />;
}
