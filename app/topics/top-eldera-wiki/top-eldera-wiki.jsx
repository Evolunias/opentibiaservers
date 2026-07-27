import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-wiki');
}

export default function TopElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-wiki" />;
}
