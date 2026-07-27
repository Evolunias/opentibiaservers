import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-canada');
}

export default function WithDiscordServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-canada" />;
}
