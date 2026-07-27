import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-wiki');
}

export default function NoResetEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-wiki" />;
}
