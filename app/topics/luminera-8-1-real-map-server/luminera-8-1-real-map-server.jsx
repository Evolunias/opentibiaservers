import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-real-map-server');
}

export default function Luminera81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-real-map-server" />;
}
