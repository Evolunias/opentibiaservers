import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-custom-map-server');
}

export default function Tibijka84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-custom-map-server" />;
}
