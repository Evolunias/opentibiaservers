import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-real-map-server');
}

export default function Tibijka71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-real-map-server" />;
}
