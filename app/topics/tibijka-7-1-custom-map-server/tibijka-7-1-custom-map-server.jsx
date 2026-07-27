import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-custom-map-server');
}

export default function Tibijka71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-custom-map-server" />;
}
