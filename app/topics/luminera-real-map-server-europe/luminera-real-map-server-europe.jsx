import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-europe');
}

export default function LumineraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-europe" />;
}
