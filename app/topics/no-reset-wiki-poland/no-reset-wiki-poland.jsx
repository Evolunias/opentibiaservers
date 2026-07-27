import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-poland');
}

export default function NoResetWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-poland" />;
}
