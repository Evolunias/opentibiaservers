import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-wiki');
}

export default function SerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="serenity-wiki" />;
}
