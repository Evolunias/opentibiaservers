import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-discord');
}

export default function WithDiscordUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-discord" />;
}
