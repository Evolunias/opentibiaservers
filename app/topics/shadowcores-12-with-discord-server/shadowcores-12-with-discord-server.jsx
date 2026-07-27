import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-with-discord-server');
}

export default function Shadowcores12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-with-discord-server" />;
}
