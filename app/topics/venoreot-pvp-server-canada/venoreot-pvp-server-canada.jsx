import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-canada');
}

export default function VenoreotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-canada" />;
}
