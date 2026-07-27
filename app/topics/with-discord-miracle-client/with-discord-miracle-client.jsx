import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-client');
}

export default function WithDiscordMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-client" />;
}
