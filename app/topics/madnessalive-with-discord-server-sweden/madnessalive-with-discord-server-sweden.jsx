import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-discord-server-sweden');
}

export default function MadnessaliveWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-discord-server-sweden" />;
}
