import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-discord-server-germany');
}

export default function MadnessaliveWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-discord-server-germany" />;
}
