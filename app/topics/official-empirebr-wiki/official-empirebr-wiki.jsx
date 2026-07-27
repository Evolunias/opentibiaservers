import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-wiki');
}

export default function OfficialEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-wiki" />;
}
