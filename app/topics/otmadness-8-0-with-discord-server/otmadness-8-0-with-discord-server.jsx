import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-with-discord-server');
}

export default function Otmadness80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-with-discord-server" />;
}
