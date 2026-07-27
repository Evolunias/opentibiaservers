import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-custom-map-server');
}

export default function Tibijka772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-custom-map-server" />;
}
