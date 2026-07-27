import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-real-map-server');
}

export default function Luminera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-real-map-server" />;
}
