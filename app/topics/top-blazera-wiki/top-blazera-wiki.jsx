import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-wiki');
}

export default function TopBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-wiki" />;
}
