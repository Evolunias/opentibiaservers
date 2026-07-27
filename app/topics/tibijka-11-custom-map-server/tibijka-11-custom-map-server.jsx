import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-custom-map-server');
}

export default function Tibijka11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-custom-map-server" />;
}
