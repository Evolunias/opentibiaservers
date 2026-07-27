import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-argentina');
}

export default function VenoreotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-argentina" />;
}
