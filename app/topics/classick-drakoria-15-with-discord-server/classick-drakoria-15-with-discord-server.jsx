import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-with-discord-server');
}

export default function ClassickDrakoria15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-with-discord-server" />;
}
