import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-with-discord-server');
}

export default function ClassickDrakoria100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-with-discord-server" />;
}
