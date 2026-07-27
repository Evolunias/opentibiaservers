import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-brazil');
}

export default function WithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-brazil" />;
}
