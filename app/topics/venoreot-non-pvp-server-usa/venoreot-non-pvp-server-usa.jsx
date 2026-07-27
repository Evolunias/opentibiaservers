import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-usa');
}

export default function VenoreotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-usa" />;
}
