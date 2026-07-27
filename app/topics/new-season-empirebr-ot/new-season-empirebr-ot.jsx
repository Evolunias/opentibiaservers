import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-ot');
}

export default function NewSeasonEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-ot" />;
}
