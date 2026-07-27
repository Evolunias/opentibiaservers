import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-wiki');
}

export default function OfficialAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-wiki" />;
}
