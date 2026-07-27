import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-europe');
}

export default function VenoreotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-europe" />;
}
