import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-real-map-server');
}

export default function Luminera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-real-map-server" />;
}
