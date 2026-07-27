import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-wiki');
}

export default function NewSeasonSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-wiki" />;
}
