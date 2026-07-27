import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-wiki');
}

export default function FreshStartElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-wiki" />;
}
