import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-germany');
}

export default function VenoreotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-germany" />;
}
