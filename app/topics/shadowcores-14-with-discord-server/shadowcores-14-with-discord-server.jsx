import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-with-discord-server');
}

export default function Shadowcores14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-with-discord-server" />;
}
