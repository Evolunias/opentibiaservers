import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-wiki');
}

export default function CustomNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-wiki" />;
}
