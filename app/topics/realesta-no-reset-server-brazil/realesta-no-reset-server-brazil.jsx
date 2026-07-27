import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-brazil');
}

export default function RealestaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-brazil" />;
}
