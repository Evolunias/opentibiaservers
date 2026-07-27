import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-uk');
}

export default function RealeraRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-uk" />;
}
