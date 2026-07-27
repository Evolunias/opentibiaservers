import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-with-discord-server');
}

export default function Otmadness11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-with-discord-server" />;
}
