import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-wiki');
}

export default function NewMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-wiki" />;
}
