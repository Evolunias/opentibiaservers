import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-france');
}

export default function VenoreotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-france" />;
}
