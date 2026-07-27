import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-europe');
}

export default function ThaisotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-europe" />;
}
