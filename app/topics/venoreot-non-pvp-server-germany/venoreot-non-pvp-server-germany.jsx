import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-germany');
}

export default function VenoreotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-germany" />;
}
