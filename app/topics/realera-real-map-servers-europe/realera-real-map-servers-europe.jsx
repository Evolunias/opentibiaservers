import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-europe');
}

export default function RealeraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-europe" />;
}
