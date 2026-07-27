import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-custom-map-server');
}

export default function Tibijka13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-custom-map-server" />;
}
