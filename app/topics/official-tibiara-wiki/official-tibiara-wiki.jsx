import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-wiki');
}

export default function OfficialTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-wiki" />;
}
