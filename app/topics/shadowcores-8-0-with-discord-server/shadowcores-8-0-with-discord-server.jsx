import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-with-discord-server');
}

export default function Shadowcores80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-with-discord-server" />;
}
