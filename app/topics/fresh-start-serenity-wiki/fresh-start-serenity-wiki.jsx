import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-wiki');
}

export default function FreshStartSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-wiki" />;
}
