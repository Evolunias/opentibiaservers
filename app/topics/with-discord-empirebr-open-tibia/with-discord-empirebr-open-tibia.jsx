import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-open-tibia');
}

export default function WithDiscordEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-open-tibia" />;
}
