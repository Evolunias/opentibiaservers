import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-wiki');
}

export default function NewSeasonAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-wiki" />;
}
