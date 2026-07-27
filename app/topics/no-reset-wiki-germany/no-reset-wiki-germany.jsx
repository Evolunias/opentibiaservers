import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-germany');
}

export default function NoResetWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-germany" />;
}
