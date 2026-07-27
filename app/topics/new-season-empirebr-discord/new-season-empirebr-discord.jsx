import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-discord');
}

export default function NewSeasonEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-discord" />;
}
