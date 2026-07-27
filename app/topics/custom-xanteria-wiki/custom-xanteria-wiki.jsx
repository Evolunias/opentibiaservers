import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-wiki');
}

export default function CustomXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-wiki" />;
}
