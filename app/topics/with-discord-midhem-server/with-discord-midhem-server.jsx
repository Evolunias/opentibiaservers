import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-server');
}

export default function WithDiscordMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-server" />;
}
