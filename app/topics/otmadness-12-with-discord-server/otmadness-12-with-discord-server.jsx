import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-with-discord-server');
}

export default function Otmadness12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-with-discord-server" />;
}
