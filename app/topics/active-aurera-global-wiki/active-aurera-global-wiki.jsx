import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-wiki');
}

export default function ActiveAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-wiki" />;
}
