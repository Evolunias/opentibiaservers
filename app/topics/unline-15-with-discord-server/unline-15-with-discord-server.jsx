import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-with-discord-server');
}

export default function Unline15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-with-discord-server" />;
}
