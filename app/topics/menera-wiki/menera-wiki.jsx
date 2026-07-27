import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-wiki');
}

export default function MeneraWikiKeywordPage() {
  return <StaticKeywordPage slug="menera-wiki" />;
}
