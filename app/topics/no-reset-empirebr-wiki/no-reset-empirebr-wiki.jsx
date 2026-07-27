import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-wiki');
}

export default function NoResetEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-wiki" />;
}
