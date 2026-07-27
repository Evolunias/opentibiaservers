import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zunera-ot-open-tibia');
}

export default function WithDiscordZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zunera-ot-open-tibia" />;
}
