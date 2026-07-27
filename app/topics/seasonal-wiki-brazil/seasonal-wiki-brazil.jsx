import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-brazil');
}

export default function SeasonalWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-brazil" />;
}
