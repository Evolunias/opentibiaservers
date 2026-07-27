import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-south-america');
}

export default function VenoreotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-south-america" />;
}
