import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-argentina');
}

export default function ThaisotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-argentina" />;
}
