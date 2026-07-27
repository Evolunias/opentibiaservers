import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-wiki');
}

export default function BestSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-wiki" />;
}
