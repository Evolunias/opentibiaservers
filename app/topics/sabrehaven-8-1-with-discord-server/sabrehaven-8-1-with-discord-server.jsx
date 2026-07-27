import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-with-discord-server');
}

export default function Sabrehaven81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-with-discord-server" />;
}
