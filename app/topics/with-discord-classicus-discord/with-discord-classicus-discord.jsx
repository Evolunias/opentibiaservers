import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-discord');
}

export default function WithDiscordClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-discord" />;
}
