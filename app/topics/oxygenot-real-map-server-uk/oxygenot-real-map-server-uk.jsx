import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-uk');
}

export default function OxygenotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-uk" />;
}
