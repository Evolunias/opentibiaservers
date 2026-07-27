import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-wiki');
}

export default function CurrentCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-wiki" />;
}
