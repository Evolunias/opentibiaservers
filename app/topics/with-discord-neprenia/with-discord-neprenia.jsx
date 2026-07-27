import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia');
}

export default function WithDiscordNepreniaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia" />;
}
