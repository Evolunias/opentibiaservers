import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-open-tibia');
}

export default function WithDiscordInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-open-tibia" />;
}
