import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-with-discord-server');
}

export default function Sabrehaven84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-with-discord-server" />;
}
