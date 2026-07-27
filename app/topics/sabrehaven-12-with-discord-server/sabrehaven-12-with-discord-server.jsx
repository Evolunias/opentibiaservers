import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-with-discord-server');
}

export default function Sabrehaven12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-with-discord-server" />;
}
