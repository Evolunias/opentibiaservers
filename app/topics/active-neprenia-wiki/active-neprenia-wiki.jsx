import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-wiki');
}

export default function ActiveNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-wiki" />;
}
