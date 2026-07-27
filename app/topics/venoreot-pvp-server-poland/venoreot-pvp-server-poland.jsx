import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-poland');
}

export default function VenoreotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-poland" />;
}
