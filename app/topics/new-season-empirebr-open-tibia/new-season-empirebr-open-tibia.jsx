import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-open-tibia');
}

export default function NewSeasonEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-open-tibia" />;
}
