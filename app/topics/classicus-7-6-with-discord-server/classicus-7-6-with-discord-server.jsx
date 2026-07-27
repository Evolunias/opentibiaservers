import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-with-discord-server');
}

export default function Classicus76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-with-discord-server" />;
}
