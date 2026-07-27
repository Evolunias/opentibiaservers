import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-with-discord-server');
}

export default function Shadowcores74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-with-discord-server" />;
}
