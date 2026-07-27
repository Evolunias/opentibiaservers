import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-open-tibia');
}

export default function WithDiscordSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-open-tibia" />;
}
