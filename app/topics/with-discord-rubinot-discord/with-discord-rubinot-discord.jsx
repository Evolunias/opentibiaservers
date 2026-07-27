import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-discord');
}

export default function WithDiscordRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-discord" />;
}
