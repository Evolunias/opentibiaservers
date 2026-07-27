import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-france');
}

export default function VenoreotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-france" />;
}
