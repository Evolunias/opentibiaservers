import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-uk');
}

export default function VenoreotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-uk" />;
}
