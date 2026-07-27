import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-with-discord-server');
}

export default function Madnessalive12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-with-discord-server" />;
}
