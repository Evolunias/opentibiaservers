import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-with-discord-server');
}

export default function ClassickDrakoria12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-with-discord-server" />;
}
