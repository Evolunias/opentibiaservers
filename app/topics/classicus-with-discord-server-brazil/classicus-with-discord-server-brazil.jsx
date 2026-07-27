import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-brazil');
}

export default function ClassicusWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-brazil" />;
}
