import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-mexico');
}

export default function NoResetWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-mexico" />;
}
