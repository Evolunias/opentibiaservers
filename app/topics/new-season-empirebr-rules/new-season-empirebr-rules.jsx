import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-rules');
}

export default function NewSeasonEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-rules" />;
}
