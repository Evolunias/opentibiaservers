import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle');
}

export default function WithDiscordMiracleKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle" />;
}
