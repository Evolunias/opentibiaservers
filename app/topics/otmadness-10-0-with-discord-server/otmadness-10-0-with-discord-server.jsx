import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-with-discord-server');
}

export default function Otmadness100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-with-discord-server" />;
}
