import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-with-discord-server');
}

export default function Classicus15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-with-discord-server" />;
}
