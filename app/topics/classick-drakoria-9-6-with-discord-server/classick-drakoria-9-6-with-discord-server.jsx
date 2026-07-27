import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-with-discord-server');
}

export default function ClassickDrakoria96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-with-discord-server" />;
}
