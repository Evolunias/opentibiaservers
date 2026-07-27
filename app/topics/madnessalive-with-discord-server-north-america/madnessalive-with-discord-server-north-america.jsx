import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-discord-server-north-america');
}

export default function MadnessaliveWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-discord-server-north-america" />;
}
