import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-with-discord-server');
}

export default function Shadowcores11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-with-discord-server" />;
}
