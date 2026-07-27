import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-wiki');
}

export default function AnticaWikiKeywordPage() {
  return <StaticKeywordPage slug="antica-wiki" />;
}
