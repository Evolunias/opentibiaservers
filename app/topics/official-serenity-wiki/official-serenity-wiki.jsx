import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-wiki');
}

export default function OfficialSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-wiki" />;
}
