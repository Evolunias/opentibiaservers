import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-uk');
}

export default function NoResetWikiUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-uk" />;
}
