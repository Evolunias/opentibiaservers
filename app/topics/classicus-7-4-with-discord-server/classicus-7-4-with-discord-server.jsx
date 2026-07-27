import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-with-discord-server');
}

export default function Classicus74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-with-discord-server" />;
}
