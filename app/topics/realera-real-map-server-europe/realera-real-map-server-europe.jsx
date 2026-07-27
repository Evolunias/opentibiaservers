import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-europe');
}

export default function RealeraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-europe" />;
}
