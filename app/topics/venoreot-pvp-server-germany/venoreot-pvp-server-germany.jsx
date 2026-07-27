import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-germany');
}

export default function VenoreotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-germany" />;
}
