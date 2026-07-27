import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-with-discord-server');
}

export default function Classicus12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-with-discord-server" />;
}
