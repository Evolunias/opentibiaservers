import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-with-discord-server');
}

export default function Otmadness96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-with-discord-server" />;
}
