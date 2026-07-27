import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-ots');
}

export default function VenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-ots" />;
}
