import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-wiki');
}

export default function NepteraWikiKeywordPage() {
  return <StaticKeywordPage slug="neptera-wiki" />;
}
