import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-wiki');
}

export default function AureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-wiki" />;
}
