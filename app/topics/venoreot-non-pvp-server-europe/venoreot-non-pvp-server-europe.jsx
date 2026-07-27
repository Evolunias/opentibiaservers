import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-europe');
}

export default function VenoreotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-europe" />;
}
