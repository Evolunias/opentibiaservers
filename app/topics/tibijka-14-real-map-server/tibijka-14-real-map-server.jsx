import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-real-map-server');
}

export default function Tibijka14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-real-map-server" />;
}
