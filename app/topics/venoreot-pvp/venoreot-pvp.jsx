import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp');
}

export default function VenoreotPvpKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp" />;
}
