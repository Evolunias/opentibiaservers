import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-with-discord-server');
}

export default function DuraOnline11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-with-discord-server" />;
}
