import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-wiki');
}

export default function ElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="eldera-wiki" />;
}
