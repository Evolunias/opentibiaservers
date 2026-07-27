import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-wiki');
}

export default function LowrateEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-wiki" />;
}
