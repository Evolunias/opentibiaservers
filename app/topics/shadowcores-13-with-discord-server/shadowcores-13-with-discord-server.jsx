import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-with-discord-server');
}

export default function Shadowcores13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-with-discord-server" />;
}
