import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-guilds');
}

export default function MadnessaliveGuildsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-guilds" />;
}
