import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-client');
}

export default function WithDiscordNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-client" />;
}
