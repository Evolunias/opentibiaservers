import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-sweden');
}

export default function ThaisotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-sweden" />;
}
