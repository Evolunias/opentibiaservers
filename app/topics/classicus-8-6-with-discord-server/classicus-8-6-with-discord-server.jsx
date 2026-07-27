import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-with-discord-server');
}

export default function Classicus86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-with-discord-server" />;
}
