import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-custom-map-server');
}

export default function Tibijka80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-custom-map-server" />;
}
