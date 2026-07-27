import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-wiki');
}

export default function FreshStartEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-wiki" />;
}
