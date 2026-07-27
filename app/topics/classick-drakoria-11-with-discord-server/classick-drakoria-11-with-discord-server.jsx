import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-with-discord-server');
}

export default function ClassickDrakoria11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-with-discord-server" />;
}
