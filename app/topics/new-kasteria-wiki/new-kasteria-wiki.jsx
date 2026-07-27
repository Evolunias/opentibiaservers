import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-wiki');
}

export default function NewKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-wiki" />;
}
