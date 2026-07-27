import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-latin-america');
}

export default function NoResetStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-latin-america" />;
}
