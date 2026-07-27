import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-wiki');
}

export default function RuberaWikiKeywordPage() {
  return <StaticKeywordPage slug="rubera-wiki" />;
}
