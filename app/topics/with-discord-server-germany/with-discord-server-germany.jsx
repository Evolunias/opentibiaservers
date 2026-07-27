import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-germany');
}

export default function WithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-germany" />;
}
