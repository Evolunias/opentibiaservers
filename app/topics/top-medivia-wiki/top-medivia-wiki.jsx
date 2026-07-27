import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-wiki');
}

export default function TopMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-wiki" />;
}
