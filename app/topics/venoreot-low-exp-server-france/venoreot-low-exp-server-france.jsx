import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-france');
}

export default function VenoreotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-france" />;
}
