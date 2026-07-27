import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-wiki');
}

export default function NewSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-wiki" />;
}
