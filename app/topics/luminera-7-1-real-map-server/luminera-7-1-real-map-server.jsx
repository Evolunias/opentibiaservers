import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-real-map-server');
}

export default function Luminera71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-real-map-server" />;
}
