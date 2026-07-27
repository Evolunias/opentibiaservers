import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-wiki');
}

export default function TopSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-wiki" />;
}
