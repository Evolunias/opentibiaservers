import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-argentina');
}

export default function ClassicusWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-argentina" />;
}
