import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-login');
}

export default function WithDiscordNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-login" />;
}
