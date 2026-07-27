import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-wiki');
}

export default function NoResetMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-wiki" />;
}
