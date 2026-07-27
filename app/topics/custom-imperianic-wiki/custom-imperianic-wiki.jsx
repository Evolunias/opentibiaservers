import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-wiki');
}

export default function CustomImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-wiki" />;
}
