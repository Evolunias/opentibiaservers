import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-mexico');
}

export default function VenoreotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-mexico" />;
}
