import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-wiki');
}

export default function HighrateSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-wiki" />;
}
