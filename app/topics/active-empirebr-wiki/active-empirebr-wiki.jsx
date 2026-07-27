import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-wiki');
}

export default function ActiveEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-wiki" />;
}
