import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-discord');
}

export default function WithDiscordTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-discord" />;
}
