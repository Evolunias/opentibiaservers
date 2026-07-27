import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-with-discord-server');
}

export default function Otmadness74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-with-discord-server" />;
}
