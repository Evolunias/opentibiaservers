import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-custom-map-server');
}

export default function Tibijka74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-custom-map-server" />;
}
