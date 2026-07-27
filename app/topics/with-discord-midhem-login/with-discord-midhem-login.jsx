import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-login');
}

export default function WithDiscordMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-login" />;
}
