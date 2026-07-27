import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-wiki');
}

export default function OfficialDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-wiki" />;
}
