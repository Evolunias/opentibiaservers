import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-discord-uk');
}

export default function WithDiscordDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-discord-uk" />;
}
