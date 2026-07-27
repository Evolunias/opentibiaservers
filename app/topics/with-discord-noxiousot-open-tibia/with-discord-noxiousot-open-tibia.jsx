import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-open-tibia');
}

export default function WithDiscordNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-open-tibia" />;
}
