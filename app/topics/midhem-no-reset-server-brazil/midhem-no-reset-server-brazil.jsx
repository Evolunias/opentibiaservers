import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-brazil');
}

export default function MidhemNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-brazil" />;
}
