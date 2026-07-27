import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-with-discord-server');
}

export default function Classicus100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-with-discord-server" />;
}
