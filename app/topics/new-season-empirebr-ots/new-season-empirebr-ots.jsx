import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-ots');
}

export default function NewSeasonEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-ots" />;
}
