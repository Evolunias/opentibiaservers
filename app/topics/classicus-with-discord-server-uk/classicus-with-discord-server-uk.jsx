import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-uk');
}

export default function ClassicusWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-uk" />;
}
