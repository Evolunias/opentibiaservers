import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-wiki');
}

export default function NewAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-wiki" />;
}
