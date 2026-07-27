import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-with-discord-server');
}

export default function Sabrehaven15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-with-discord-server" />;
}
