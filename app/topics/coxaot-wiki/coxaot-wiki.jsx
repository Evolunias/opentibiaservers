import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-wiki');
}

export default function CoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="coxaot-wiki" />;
}
