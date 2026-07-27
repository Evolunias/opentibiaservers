import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-wiki');
}

export default function NewBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-wiki" />;
}
