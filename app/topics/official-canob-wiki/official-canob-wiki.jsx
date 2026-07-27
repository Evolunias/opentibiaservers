import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-wiki');
}

export default function OfficialCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="official-canob-wiki" />;
}
