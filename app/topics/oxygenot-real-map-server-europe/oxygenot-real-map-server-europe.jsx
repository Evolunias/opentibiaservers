import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-europe');
}

export default function OxygenotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-europe" />;
}
