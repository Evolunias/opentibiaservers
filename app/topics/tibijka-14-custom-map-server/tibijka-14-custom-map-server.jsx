import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-custom-map-server');
}

export default function Tibijka14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-custom-map-server" />;
}
