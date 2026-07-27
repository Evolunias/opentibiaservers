import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-with-discord-server');
}

export default function Sabrehaven86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-with-discord-server" />;
}
