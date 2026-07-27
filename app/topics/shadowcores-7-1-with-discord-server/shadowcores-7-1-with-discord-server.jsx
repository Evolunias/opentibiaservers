import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-with-discord-server');
}

export default function Shadowcores71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-with-discord-server" />;
}
