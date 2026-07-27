import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-wiki');
}

export default function OfficialThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-wiki" />;
}
