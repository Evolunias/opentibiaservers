import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-with-discord-server');
}

export default function Sabrehaven13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-with-discord-server" />;
}
