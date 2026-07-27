import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-custom-map-server');
}

export default function Tibijka15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-custom-map-server" />;
}
