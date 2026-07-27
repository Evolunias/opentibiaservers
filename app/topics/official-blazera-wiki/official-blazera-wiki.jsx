import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-wiki');
}

export default function OfficialBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-wiki" />;
}
