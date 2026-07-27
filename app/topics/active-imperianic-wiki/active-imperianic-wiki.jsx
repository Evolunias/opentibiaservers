import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-wiki');
}

export default function ActiveImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-wiki" />;
}
