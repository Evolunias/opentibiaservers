import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-tibia');
}

export default function WithDiscordSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-tibia" />;
}
