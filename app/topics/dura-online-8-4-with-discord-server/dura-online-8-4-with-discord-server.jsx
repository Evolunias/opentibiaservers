import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-with-discord-server');
}

export default function DuraOnline84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-with-discord-server" />;
}
