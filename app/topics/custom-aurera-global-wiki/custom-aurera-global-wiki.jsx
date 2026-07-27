import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-wiki');
}

export default function CustomAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-wiki" />;
}
