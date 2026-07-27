import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-with-discord-server');
}

export default function DuraOnline12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-with-discord-server" />;
}
