import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-mexico');
}

export default function ClassicusWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-mexico" />;
}
