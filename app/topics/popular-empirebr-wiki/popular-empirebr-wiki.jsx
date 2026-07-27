import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-wiki');
}

export default function PopularEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-wiki" />;
}
