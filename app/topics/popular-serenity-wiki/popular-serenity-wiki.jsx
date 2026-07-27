import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-wiki');
}

export default function PopularSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-wiki" />;
}
