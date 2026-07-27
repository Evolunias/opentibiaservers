import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-europe-server');
}

export default function VenoreotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-europe-server" />;
}
