import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-usa');
}

export default function ThaisotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-usa" />;
}
