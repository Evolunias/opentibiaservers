import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-france');
}

export default function ClassicusWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-france" />;
}
