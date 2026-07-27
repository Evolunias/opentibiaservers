import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-wiki');
}

export default function CustomElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-wiki" />;
}
