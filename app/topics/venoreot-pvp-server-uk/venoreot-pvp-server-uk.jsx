import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-uk');
}

export default function VenoreotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-uk" />;
}
