import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-with-discord-server');
}

export default function Unline12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-with-discord-server" />;
}
