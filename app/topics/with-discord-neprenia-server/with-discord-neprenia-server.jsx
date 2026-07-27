import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-server');
}

export default function WithDiscordNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-server" />;
}
