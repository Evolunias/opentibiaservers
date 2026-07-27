import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-guide');
}

export default function NewSeasonEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-guide" />;
}
