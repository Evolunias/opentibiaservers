import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-tibia');
}

export default function WithDiscordNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-tibia" />;
}
