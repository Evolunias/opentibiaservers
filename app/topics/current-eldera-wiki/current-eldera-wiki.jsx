import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-wiki');
}

export default function CurrentElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-wiki" />;
}
