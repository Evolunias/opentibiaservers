import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-wiki');
}

export default function NewSeasonEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-wiki" />;
}
