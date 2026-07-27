import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-official');
}

export default function NewSeasonEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-official" />;
}
