import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-discord');
}

export default function WithDiscordSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-discord" />;
}
