import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-usa');
}

export default function VenoreotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-usa" />;
}
