import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-with-discord-server');
}

export default function ClassickDrakoria76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-with-discord-server" />;
}
