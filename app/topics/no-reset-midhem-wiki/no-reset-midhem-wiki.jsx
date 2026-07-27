import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-wiki');
}

export default function NoResetMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-wiki" />;
}
