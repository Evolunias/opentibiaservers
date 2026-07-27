import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-wiki');
}

export default function RealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="realera-wiki" />;
}
