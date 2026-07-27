import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-north-america');
}

export default function VenoreotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-north-america" />;
}
