import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-europe');
}

export default function NoResetWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-europe" />;
}
