import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-europe');
}

export default function VenoreotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-europe" />;
}
