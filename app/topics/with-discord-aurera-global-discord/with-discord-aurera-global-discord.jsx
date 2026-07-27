import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-discord');
}

export default function WithDiscordAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-discord" />;
}
