import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-with-discord-server');
}

export default function Otmadness76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-with-discord-server" />;
}
