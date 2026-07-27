import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-with-discord-server');
}

export default function Classicus13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-with-discord-server" />;
}
