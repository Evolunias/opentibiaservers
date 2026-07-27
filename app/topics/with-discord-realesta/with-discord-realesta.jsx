import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta');
}

export default function WithDiscordRealestaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta" />;
}
