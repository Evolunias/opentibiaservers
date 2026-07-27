import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-wiki');
}

export default function LowrateEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-wiki" />;
}
