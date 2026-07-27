import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-wiki');
}

export default function OfficialSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-wiki" />;
}
