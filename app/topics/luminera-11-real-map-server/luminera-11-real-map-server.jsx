import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-real-map-server');
}

export default function Luminera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-real-map-server" />;
}
