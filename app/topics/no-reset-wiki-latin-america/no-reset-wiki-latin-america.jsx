import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-latin-america');
}

export default function NoResetWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-latin-america" />;
}
