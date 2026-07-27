import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-with-discord-server');
}

export default function Otmadness14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-with-discord-server" />;
}
