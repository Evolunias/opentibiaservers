import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-wiki');
}

export default function ActiveRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-realera-wiki" />;
}
