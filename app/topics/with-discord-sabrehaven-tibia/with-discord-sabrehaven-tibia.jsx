import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-tibia');
}

export default function WithDiscordSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-tibia" />;
}
