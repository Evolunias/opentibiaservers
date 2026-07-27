import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-argentina');
}

export default function VenoreotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-argentina" />;
}
