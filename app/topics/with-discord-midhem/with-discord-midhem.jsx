import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem');
}

export default function WithDiscordMidhemKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem" />;
}
