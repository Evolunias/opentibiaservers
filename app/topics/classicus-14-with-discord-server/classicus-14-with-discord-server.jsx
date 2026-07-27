import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-with-discord-server');
}

export default function Classicus14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-with-discord-server" />;
}
