import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-wiki');
}

export default function CurrentSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-wiki" />;
}
