import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-brazil');
}

export default function NoResetWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-brazil" />;
}
