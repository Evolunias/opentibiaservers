import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-wiki');
}

export default function BestEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-wiki" />;
}
