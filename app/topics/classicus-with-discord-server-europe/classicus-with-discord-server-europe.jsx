import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-europe');
}

export default function ClassicusWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-europe" />;
}
