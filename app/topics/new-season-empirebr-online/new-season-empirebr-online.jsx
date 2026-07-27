import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-online');
}

export default function NewSeasonEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-online" />;
}
