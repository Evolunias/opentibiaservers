import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-ot');
}

export default function VenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="venoreot-ot" />;
}
