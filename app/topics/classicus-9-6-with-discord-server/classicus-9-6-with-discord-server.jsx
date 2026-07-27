import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-with-discord-server');
}

export default function Classicus96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-with-discord-server" />;
}
