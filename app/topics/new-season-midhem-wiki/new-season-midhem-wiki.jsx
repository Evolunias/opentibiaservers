import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-wiki');
}

export default function NewSeasonMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-wiki" />;
}
