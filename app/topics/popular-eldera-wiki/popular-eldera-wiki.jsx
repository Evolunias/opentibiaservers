import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-wiki');
}

export default function PopularElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-wiki" />;
}
