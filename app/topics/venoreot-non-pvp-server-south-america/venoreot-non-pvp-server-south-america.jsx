import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-south-america');
}

export default function VenoreotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-south-america" />;
}
