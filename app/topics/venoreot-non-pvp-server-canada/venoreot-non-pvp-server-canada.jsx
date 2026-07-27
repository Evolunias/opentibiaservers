import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-canada');
}

export default function VenoreotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-canada" />;
}
