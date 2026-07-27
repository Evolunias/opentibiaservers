import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-uk');
}

export default function VenoreotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-uk" />;
}
