import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-wiki');
}

export default function VineraWikiKeywordPage() {
  return <StaticKeywordPage slug="vinera-wiki" />;
}
