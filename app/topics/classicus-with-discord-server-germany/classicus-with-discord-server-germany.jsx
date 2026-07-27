import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-germany');
}

export default function ClassicusWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-germany" />;
}
