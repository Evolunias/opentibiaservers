import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-europe');
}

export default function OxygenotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-europe" />;
}
