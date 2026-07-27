import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-with-discord-server');
}

export default function ClassickDrakoria81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-with-discord-server" />;
}
