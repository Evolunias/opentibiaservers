import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-with-discord-server');
}

export default function Sabrehaven100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-with-discord-server" />;
}
