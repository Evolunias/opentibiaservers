import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-wiki');
}

export default function OfficialMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-wiki" />;
}
