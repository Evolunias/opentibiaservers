import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-with-discord-server');
}

export default function DuraOnline100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-with-discord-server" />;
}
