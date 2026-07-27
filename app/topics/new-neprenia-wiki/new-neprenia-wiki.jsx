import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-wiki');
}

export default function NewNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-wiki" />;
}
