import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-discord');
}

export default function WithDiscordThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-discord" />;
}
