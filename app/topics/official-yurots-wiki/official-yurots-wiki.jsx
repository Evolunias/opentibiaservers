import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-wiki');
}

export default function OfficialYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-wiki" />;
}
