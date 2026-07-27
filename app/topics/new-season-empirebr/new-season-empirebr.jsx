import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr');
}

export default function NewSeasonEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr" />;
}
