import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-with-discord-server');
}

export default function Madnessalive15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-with-discord-server" />;
}
