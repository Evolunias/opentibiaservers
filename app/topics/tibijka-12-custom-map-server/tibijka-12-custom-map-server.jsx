import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-custom-map-server');
}

export default function Tibijka12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-custom-map-server" />;
}
