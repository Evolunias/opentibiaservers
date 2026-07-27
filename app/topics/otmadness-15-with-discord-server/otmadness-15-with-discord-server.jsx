import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-with-discord-server');
}

export default function Otmadness15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-with-discord-server" />;
}
