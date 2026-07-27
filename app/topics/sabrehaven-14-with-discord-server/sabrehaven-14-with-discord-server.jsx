import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-with-discord-server');
}

export default function Sabrehaven14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-with-discord-server" />;
}
