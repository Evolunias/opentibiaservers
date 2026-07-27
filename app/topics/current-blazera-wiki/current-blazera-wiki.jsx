import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-wiki');
}

export default function CurrentBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-wiki" />;
}
