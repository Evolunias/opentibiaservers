import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-wiki');
}

export default function LowrateBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-wiki" />;
}
