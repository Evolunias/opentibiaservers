import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-uk');
}

export default function RealestaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-uk" />;
}
