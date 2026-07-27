import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-real-map-server');
}

export default function Luminera96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-real-map-server" />;
}
