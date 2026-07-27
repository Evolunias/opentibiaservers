import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-wiki');
}

export default function OfficialAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-wiki" />;
}
