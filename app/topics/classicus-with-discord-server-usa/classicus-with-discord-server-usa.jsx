import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-usa');
}

export default function ClassicusWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-usa" />;
}
