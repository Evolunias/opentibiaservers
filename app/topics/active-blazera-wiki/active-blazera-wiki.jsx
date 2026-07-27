import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-wiki');
}

export default function ActiveBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-wiki" />;
}
