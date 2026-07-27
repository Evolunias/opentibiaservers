import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-poland');
}

export default function ClassicusWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-poland" />;
}
