import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-with-discord-server');
}

export default function Sabrehaven11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-with-discord-server" />;
}
