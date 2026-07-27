import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-custom-map-server');
}

export default function Tibijka76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-custom-map-server" />;
}
