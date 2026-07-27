import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline');
}

export default function WithDiscordUnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline" />;
}
