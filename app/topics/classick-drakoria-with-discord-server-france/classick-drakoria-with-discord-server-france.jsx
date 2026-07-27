import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-discord-server-france');
}

export default function ClassickDrakoriaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-discord-server-france" />;
}
