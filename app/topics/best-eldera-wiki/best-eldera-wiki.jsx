import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-wiki');
}

export default function BestElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-wiki" />;
}
