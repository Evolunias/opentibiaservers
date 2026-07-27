import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-wiki');
}

export default function NewSeasonEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-wiki" />;
}
