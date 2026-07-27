import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-discord');
}

export default function WithDiscordMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-discord" />;
}
