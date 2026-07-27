import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-poland');
}

export default function VenoreotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-poland" />;
}
