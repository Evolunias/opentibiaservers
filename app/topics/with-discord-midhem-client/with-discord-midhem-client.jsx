import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-client');
}

export default function WithDiscordMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-client" />;
}
