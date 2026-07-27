import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-mexico');
}

export default function VenoreotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-mexico" />;
}
