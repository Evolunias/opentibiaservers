import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-uk');
}

export default function RealeraRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-uk" />;
}
