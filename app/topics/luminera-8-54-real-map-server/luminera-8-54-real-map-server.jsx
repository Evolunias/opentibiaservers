import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-real-map-server');
}

export default function Luminera854RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-real-map-server" />;
}
