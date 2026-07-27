import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-wiki');
}

export default function ActiveXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-wiki" />;
}
