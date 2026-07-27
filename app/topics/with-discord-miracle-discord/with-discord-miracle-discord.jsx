import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-discord');
}

export default function WithDiscordMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-discord" />;
}
