import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-poland');
}

export default function VenoreotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-poland" />;
}
