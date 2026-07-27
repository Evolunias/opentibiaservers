import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-with-discord-server');
}

export default function Classicus84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-with-discord-server" />;
}
