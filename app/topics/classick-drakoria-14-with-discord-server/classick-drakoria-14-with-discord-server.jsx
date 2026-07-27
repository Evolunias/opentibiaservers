import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-with-discord-server');
}

export default function ClassickDrakoria14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-with-discord-server" />;
}
