import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-wiki');
}

export default function NewEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-wiki" />;
}
