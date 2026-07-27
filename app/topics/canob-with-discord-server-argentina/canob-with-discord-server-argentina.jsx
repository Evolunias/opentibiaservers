import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-argentina');
}

export default function CanobWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-argentina" />;
}
