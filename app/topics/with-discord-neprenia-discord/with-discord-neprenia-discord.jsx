import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-discord');
}

export default function WithDiscordNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-discord" />;
}
