import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-open-tibia');
}

export default function WithDiscordSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-open-tibia" />;
}
