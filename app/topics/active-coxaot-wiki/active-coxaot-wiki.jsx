import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-wiki');
}

export default function ActiveCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-wiki" />;
}
