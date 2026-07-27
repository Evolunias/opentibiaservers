import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-login');
}

export default function WithDiscordMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-login" />;
}
