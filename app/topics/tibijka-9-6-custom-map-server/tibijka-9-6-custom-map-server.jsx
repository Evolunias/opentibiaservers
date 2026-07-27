import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-custom-map-server');
}

export default function Tibijka96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-custom-map-server" />;
}
