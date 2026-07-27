import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-with-discord-server');
}

export default function Shadowcores86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-with-discord-server" />;
}
