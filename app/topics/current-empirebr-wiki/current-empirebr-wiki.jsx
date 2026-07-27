import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-wiki');
}

export default function CurrentEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-wiki" />;
}
