import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-wiki');
}

export default function HighrateEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-wiki" />;
}
