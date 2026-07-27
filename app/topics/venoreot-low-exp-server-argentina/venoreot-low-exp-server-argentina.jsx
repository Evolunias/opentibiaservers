import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-argentina');
}

export default function VenoreotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-argentina" />;
}
