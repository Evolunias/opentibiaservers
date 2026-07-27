import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-wiki');
}

export default function LowrateMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-wiki" />;
}
