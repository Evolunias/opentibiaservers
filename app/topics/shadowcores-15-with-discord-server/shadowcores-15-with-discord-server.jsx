import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-with-discord-server');
}

export default function Shadowcores15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-with-discord-server" />;
}
