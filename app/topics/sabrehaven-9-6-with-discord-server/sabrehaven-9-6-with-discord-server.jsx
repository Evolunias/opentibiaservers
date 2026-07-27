import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-with-discord-server');
}

export default function Sabrehaven96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-with-discord-server" />;
}
