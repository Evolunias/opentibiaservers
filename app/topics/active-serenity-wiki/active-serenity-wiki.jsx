import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-wiki');
}

export default function ActiveSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-wiki" />;
}
