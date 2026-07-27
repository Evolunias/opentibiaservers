import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-discord-server-europe');
}

export default function MadnessaliveWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-discord-server-europe" />;
}
