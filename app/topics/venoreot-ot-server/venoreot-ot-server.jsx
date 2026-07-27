import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-ot-server');
}

export default function VenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-ot-server" />;
}
