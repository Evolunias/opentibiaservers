import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-discord-server-france');
}

export default function MadnessaliveWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-discord-server-france" />;
}
